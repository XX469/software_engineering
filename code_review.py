import os
from openai import OpenAI

client = OpenAI(
    # defaults to os.environ.get("OPENAI_API_KEY")
    # 免费api_key获取地址及使用方法:https://github.com/chatanywhere/GPT_API_free?tab=readme-ov-file
    api_key="sk-e0UY1pZjUkUQN6iR2MvYxFisSFBps2dh3KQ6uTaoyolXw5lc",
    base_url="https://api.chatanywhere.tech/v1"
)


OUTPUT_TEMPLATE = "| **输出信息** | **描述**                                   |" \
                  "| ------------ | ------------------------------------------ |" \
                  "| 文件名称     | 发生问题的文件名称                         |" \
                  "| 报告类型     | 错误/警告/信息                             |" \
                  "| 问题描述     | 描述问题的具体细节                         |" \
                  "| 错误位置     | 指出问题发生的行号和代码段                 |" \
                  "| 问题类型     | 与问题相关的规则编号或问题类型               |" \
                  "| 问题严重性   | 问题的严重程度，如致命、严重、警告、建议等 |" \
                  "| 可能的后果   | 问题可能导致的潜在影响                     |" \
                  "| 修复建议     | 提供解决问题的建议或方法以及修改后的代码|"
TEST_FILE_PATH = r"test_files/example.py"
TEST_DIR_PATH = r"test_files"
SUPPORT_FILE_TYPE = ["py", "java", "c", "cpp", "js", "ts", "go", "php", "rb", "swift", "kt", "rs", "scala", "html",
                     "css", "scss", "less", "sass", "json", "yaml", "xml", "md", "txt"]
SUPPORT_MODEL = ["gpt-3.5-turbo"]


class CodeReviewer:
    def __init__(self, model="gpt-3.5-turbo", method="file"):
        self.code = {}
        self.model = model
        self.load_method = method

    def set_model(self, model):
        self.model = model

    def set_load_method(self, method):
        self.load_method = method

    def load_code_from_input(self, code):
        # 从输入框中加载代码
        self.code["input code"] = code

    def load_code_from_file(self, path):
        print("加载需要审查的代码文件。。。")
        with open(path, 'r', encoding='utf-8') as file:
            file_name = os.path.basename(path)
            self.code[file_name] = ''
            lines = file.readlines()
            for line in lines:
                self.code[file_name] += line
        print("加载完成！")

    def load_code_from_directory(self, path):
        print("加载需要审查的代码文件夹。。。")
        for root, dirs, files in os.walk(path):
            for file in files:
                if any(file.endswith(ext) for ext in SUPPORT_FILE_TYPE):
                    file_path = os.path.join(root, file)
                    self.load_code_from_file(file_path)
        print("加载完成！")

    def get_query_message(self, name, code):
        messages = [
            {"role": "system", "content": "你是一个有亲和力的代码审查专家，你需要根据提供的代码审查并给出针对代码中出现的每一个问题的详细的问题报告。"},
            {"role": "user", "content": f"请审查以下代码，给出详细的问题报告。代码中的每一个问题都要严格遵循固定格式进行输出，并在开头输出对应文件的文件名和问题总数，"
                                        f"并在最后输出对该文件的总体评价\n"
                                        f"当前文件名称：{name}代码：\n{code}\n"
                                        f"输出格式：\n**文件名称**\t...\n**问题总数**\t...\n"
                                        f"**详细报告**\n**NO.x**\n{OUTPUT_TEMPLATE}（与问题总数数量相同的表格）\n**文件总体评价**\t...\n"},
            {"role": "assistant", "content": OUTPUT_TEMPLATE},
        ]
        return messages

    def query(self):
        print("开始审查代码。。。")
        answers = ''
        for name, code in self.code.items():
            messages = self.get_query_message(name, code)
            if self.model == "gpt-3.5-turbo":
                answer = gpt_35_api(messages)
            else:
                answer = "模型调用失败！"
            answers = answers + answer + "\n\n"
        return answers

    def code_review_task(self, method: str, target: str):
        # 加载代码
        self.code = {}
        if method == "file":
            self.load_code_from_file(target)
        elif method == "dir":
            self.load_code_from_directory(target)
        elif method == "input":
            self.load_code_from_input(target)
        else:
            return "代码加载失败！"
        answer = self.query()
        result = f"以下是代码审查结果：\n" + answer + "\n"
        return result


# 非流式响应
def gpt_35_api(messages: list):
    completion = client.chat.completions.create(model="gpt-3.5-turbo", messages=messages)
    return completion.choices[0].message.content


# 流式响应
def gpt_35_api_stream(messages: list):
    stream = client.chat.completions.create(
        model='gpt-3.5-turbo',
        messages=messages,
        stream=True,
    )
    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            print(chunk.choices[0].delta.content, end="")


if __name__ == '__main__':
    model = CodeReviewer()
    # res = model.code_review_task("dir", TEST_DIR_PATH)
    # print(res)

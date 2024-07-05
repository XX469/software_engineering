
class Multi(Exception):
    def __init__(self, msg:str, code:int, *args, **kwargs) -> None:
        super().__init__(msg, code, *args, **kwargs)
    

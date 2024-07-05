import enum
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath('.')))
from distribute_monitor.logger import LOGGER
from distribute_monitor.network import UDPSender,get_host_ip
from distribute_monitor.timer import Timer
from distribute_monitor.data_process import LocalDataProcess
import random


class NodeStatus(enum.Enum):
    LEADER = 0,
    FOLLOWER = 1,
    CANDIDATE = 2,
    DEAD = 3,
    UNKNOWN = 4

    def __str__(self) -> str:
        return self.name

class Node:
    __heartbeat_interval = 30
    __election_interval = 150
    @staticmethod
    def get_election_interval():
        return Node.__election_interval + random.randint(0, Node.__election_interval)
    
    def get_heartbeat_interval():
        return Node.__heartbeat_interval

    def send_heartbeat(self):
        self.election_timer.start()
        LOGGER.debug(self.ip, 'send heartbeat')

    def get_status(self):
        return (':'.join([self.ip, self.port]), str(self.status))

############### TODO ###############
        
    def __init__(self, ip:str, port:int) -> None:
        self.ip = ip
        self.port = port
        self.udp_sender = UDPSender(ip, port)
        self.status = NodeStatus.FOLLOWER
        self.heartbeat_timer = Timer(Node.get_heartbeat_interval, self.send_heartbeat)
        self.election_timer = Timer(Node.get_election_interval, self.send_heartbeat)
        # self.heartbeat_timer.start()
        # self.election_timer.start()



if __name__ == '__main__':
    node = Node(get_host_ip(), 5820)
    print(node.get_status())
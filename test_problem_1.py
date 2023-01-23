# Tests for Problem 1
# Hello World

import os.path
import sys
from problem_1 import main

def test_problem_1():
    try:
        exists = os.path.exists("problem_1.py")
        assert exists == True
    except:
        sys.exit()
        
    assert main() == "Hello World!"
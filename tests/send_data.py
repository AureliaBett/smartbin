import json
import requests
import datetime

url = "http://localhost:8080/trash"
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
data = {'weight': '22', 'timestamp': timestamp, 'id': '1'}
r = requests.post(url, data=json.dumps(data), headers=headers)

#To GET API details
#and loop through the data
import requests
import json
response = requests.get('https://www.example.com/get-data')
data = response.json()
print(data)
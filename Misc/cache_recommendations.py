import json
from concurrent.futures import ThreadPoolExecutor, as_completed

import requests

recs = [{} for _ in range(1000)]


def retrieve(i):
    url = f"https://nx63wj2cmj.execute-api.us-east-1.amazonaws.com/default/testFunc?userID={10000 + i}"
    print(f"\rRetrieving {url}", end="", flush=True)
    recs[i] = requests.get(url).json()


with ThreadPoolExecutor(max_workers=8) as executor:
    futures = [executor.submit(retrieve, i) for i in range(1000)]

    for future in as_completed(futures):
        pass

open("cached_rec.json", "w").write(json.dumps(recs))

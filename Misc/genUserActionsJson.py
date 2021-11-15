import json

import pandas as pd

df = pd.read_csv("USER_INTERACTIONS.csv")

user_actions = [[] for _ in range(1000)]


for index, row in df.iterrows():
    user_actions[int(row["USER_ID"]) - 10000].append(
        [row["ITEM_ID"], row["ACTION"], row["TIMESTAMP"]]
    )

with open("user_actions.json", "w") as f:
    f.write(json.dumps(user_actions))

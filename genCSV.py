import pandas as pd
import numpy as np
import random
import time

SHEET = "Data for Hackathon.xlsx"

users_df = pd.read_excel(SHEET, sheet_name="Users")

# Create USERS.csv
users_df.drop(columns=["Hospital", "Phone"], inplace=True)
users_df.rename(columns={"UserId": "USER_ID", "First Name" : "FIRST_NAME", "Last Name": "LAST_NAME", "Email": "EMAIL"}, inplace=True)
users_df.set_index("USER_ID", inplace=True)

print(users_df.head())

users_df.to_csv("USERS.csv")

# Create ITEM_METADATA.csv
products_df = pd.read_excel(SHEET, sheet_name="Products")
products_df.drop(columns=["Product Category", "Manufacturer", "Image Link", "Product Link"], inplace=True)
products_df.rename(columns={"ItemNo": "ITEM_ID", "ItemName": "ITEM_NAME", "Product Family": "ITEM_FAMILY", "Product Overview": "ITEM_OVERVIEW"}, inplace=True)
products_df.set_index("ITEM_ID", inplace=True)

# Remove commas as this may conflict with the csv
cols = ["ITEM_NAME", "ITEM_FAMILY", "ITEM_OVERVIEW"]
products_df[cols] = products_df[cols].replace({',': ''}, regex=True)
print(products_df)

products_df.to_csv("ITEM_METADATA.csv")

# Generate USER_INTERACTIONS.csv
rows = 25000
user_ids = users_df.index.values
item_ids = products_df.index.values

interaction_headers = ["USER_ID", "ITEM_ID", "ACTION", "TIMESTAMP"]

ACTIONS = ["OPENED", "CLICKED", "ADDED_TO_CART", "PURCHASED"]
ACTION_WEIGHTS = [10, 20, 4, 1]

interaction_time = int(time.time())

with open("USER_INTERACTIONS.csv", "w") as f:
    f.write(",".join(interaction_headers) + "\n")
    for i in range(rows):
        print(f"\rAdding interaction {i+1}", end="", flush=True)
        interaction_time += random.randrange(1, 300)
        chosen_user_id = str(np.random.choice(user_ids))
        chosen_item_id = str(np.random.choice(item_ids))
        chosen_action = random.choices(ACTIONS, weights=ACTION_WEIGHTS, k=1)[0]
        f.write(",".join([chosen_user_id, chosen_item_id, chosen_action, str(interaction_time)]) + "\n")

# For User data:
# - Group users based on 30 or so hospitals
# - Role - Biomed Department Manager (50%), CFO (1 person), Operator (Rest)

# For Item data:
# - Either remove overview column

# For Interaction data:
# Generate events in a more refined way

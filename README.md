# GE

> Our team project for the GE Hack-E-LTH '21 Hackathon

## Getting started

1. Deploy the backend on AWS

   1. Upload `USERS.csv`, `ITEMS.csv` and `USER_INTERACTIONS.csv` to an S3 bucket (Find these files in the shared GE box).
   2. Add a bucket policy allowing Amazon Personalize to access the contents.
      <details>
      <summary>Bucket policy</summary>

      Replace `BUCKET_NAME` with your bucket name below.

      ```json
      {
        "Version": "2012-10-17",
        "Id": "PersonalizeS3BucketAccessPolicy",
        "Statement": [
          {
            "Sid": "PersonalizeS3BucketAccessPolicy",
            "Effect": "Allow",
            "Principal": {
              "Service": "personalize.amazonaws.com"
            },
            "Action": ["s3:GetObject", "s3:ListBucket"],
            "Resource": [
              "arn:aws:s3:::BUCKET_NAME",
              "arn:aws:s3:::BUCKET_NAME/*"
            ]
          }
        ]
      }
      ```

      </details>

   3. Create an IAM role with the AmazonS3ReadOnlyAccess permission. Steps 2 and 3 can also be automated by running [initRole.ipynb](./Misc/initRole.ipynb)
   4. In the Amazon personalize dashboard, create a dataset group and add the three datasets. The required shema for each of the datasets can be copied from below
      <details>
      <summary>Users dataset schema</summary>

      ```json
      {
        "type": "record",
        "name": "Users",
        "namespace": "com.amazonaws.personalize.schema",
        "fields": [
          {
            "name": "USER_ID",
            "type": "string"
          },
          {
            "name": "USER_HOSPITAL",
            "type": ["null", "string"]
          },
          {
            "name": "USER_ROLE",
            "type": "string",
            "categorical": true
          }
        ],
        "version": "1.0"
      }
      ```

      </details>
      <details>
      <summary>Items dataset schema</summary>

      ```json
      {
        "type": "record",
        "name": "Items",
        "namespace": "com.amazonaws.personalize.schema",
        "fields": [
          {
            "name": "ITEM_NAME",
            "type": ["null", "string"]
          },
          {
            "name": "ITEM_FAMILY",
            "type": "string",
            "categorical": true
          },
          {
            "name": "ITEM_OVERVIEW",
            "type": ["null", "string"]
          },
          {
            "name": "ITEM_ID",
            "type": "string"
          }
        ],
        "version": "1.0"
      }
      ```

      </details>
      <details>
      <summary>Interactions dataset schema</summary>

      ```json
      {
        "type": "record",
        "name": "Interactions",
        "namespace": "com.amazonaws.personalize.schema",
        "fields": [
          {
            "name": "USER_ID",
            "type": "string"
          },
          {
            "name": "ITEM_ID",
            "type": "string"
          },
          {
            "name": "ACTION",
            "type": "string",
            "category": true
          },
          {
            "name": "TIMESTAMP",
            "type": "long"
          }
        ],
        "version": "1.0"
      }
      ```

      </details>

   5. Once the dataset import jobs have completed, create a solution with the `arn:aws:personalize:::recipe/aws-user-personalization` recipe.
   6. Create a campaign with the given solution version and copy the campaign ARN
   7. Create a lambda function with the code from [getRecLambda.py](./Misc/getRecLambda.py). Copy the Campaign ARN to line 27.
   8. Attach an API gateway trigger to the function.

2. Start the web app

   Make sure you have [NodeJS](https://nodejs.org/en/) v16.6.0+ installed. Then, continue with the following steps:

   ```bash
   # Install dependencies
   npm install

   # Copy the example env file to .env.local, and fill in your endpoint URL from API gateway
   cp .env.local.example .env.local

   # The development server should be available on http://localhost:3000
   npm run dev
   ```

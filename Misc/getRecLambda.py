import boto3
import json

def lambda_handler(event, context):
    
    query = event["queryStringParameters"]

    print(f"Query parameters: {query}")

    if not query:
        return {
            'statusCode': 400,
            'body': json.dumps({ 'message': 'No query parameters found' })
        }

    user_id = query["userID"]

    if not user_id:
        return {
            'statusCode': 400,
            'body': json.dumps({ 'message': 'Please specify a user ID' })
        }

    print(f"User ID: {user_id}")

    personalize_runtime = boto3.client('personalize-runtime')
    campaign_arn = ""

    get_recommendations_response = personalize_runtime.get_recommendations(
        campaignArn = campaign_arn,
        userId = str(user_id),
    )

    item_list = get_recommendations_response['itemList']
    
    return {
        'statusCode': 200,
        'body': json.dumps({ 'items': item_list })
    }

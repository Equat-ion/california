from openai import OpenAI
from openai.types.chat import ChatCompletionMessageParam
from dotenv import load_dotenv
import os
import json

load_dotenv()

API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_BASE_URL = os.getenv("OPENAI_BASE_URL")

OPENAI_MODEL = "google/gemini-3.1-flash-lite-preview"

client = OpenAI(
    api_key=API_KEY,
    base_url=OPENAI_BASE_URL
)

def get_calorie(food_input:str):

    CALORIE_MESSAGE: list[ChatCompletionMessageParam] = [
        {
            "role": "system",
            "content": (
                "You are a nutrition assistant. "
                "Return nutrition data only."
            )
        },
        {
            "role": "user",
            "content": food_input
        }
    ]

    response = client.chat.completions.create(
        model=OPENAI_MODEL,
        messages=CALORIE_MESSAGE,
        response_format={
            "type": "json_schema",
            "json_schema": {
                "name": "nutrition_response",
                "schema": {
                    "type": "object",
                    "properties": {
                        "food": {
                            "type": "string"
                        },
                        "quantity": {
                            "type": "string"
                        },
                        "calories": {
                            "type": "number"
                        },
                        "carbs_g": {
                            "type": "number"
                        },
                        "protein_g": {
                            "type": "number"
                        },
                        "fat_g": {
                            "type": "number"
                        },
                        "sodium_mg": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "food",
                        "quantity",
                        "calories",
                        "carbs_g",
                        "protein_g",
                        "fat_g",
                        "sodium_mg"
                    ],
                    "additionalProperties": False
                }
            }
        }
    )

    content = response.choices[0].message.content

    if content is None:
        raise ValueError("Model response did not include JSON content.")

    data = json.loads(content)

    return data
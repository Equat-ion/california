from calorie_finder import get_calorie
from fastapi import FastAPI

app = FastAPI()

@app.post("/get_nutrition")
def get_nutrition(food_input:str):
    '''Get Nutrition Data using just a string'''
    return get_calorie(food_input=food_input)

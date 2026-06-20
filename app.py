from flask import Flask, render_template
from dotenv import load_dotenv
import requests
import os

app = Flask(__name__)

API_KEY = os.getenv("RAPIDAPI_KEY")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/tracking/<code>")
def tracking(code):
    url = "https://correios-rastreamento-de-encomendas.p.rapidapi.com/track"

    querystring = {
        "tracking_code": code,
        "confidence_level": "high"
    }

    headers = {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "correios-rastreamento-de-encomendas.p.rapidapi.com",
        "Content-Type": "application/json"
    }

    response = requests.get(url, headers=headers, params=querystring)

    api_response = response.json()

    correios = api_response["correios_object"]
    last_event = correios["eventos"][0]

    origin = last_event["unidade"]["endereco"]

    destination = (
        last_event["unidadeDestino"]["endereco"]
        if last_event["unidadeDestino"]
        else None
    )

    return {
        "code": api_response["tracking_code"],
        "status": last_event["descricaoFrontEnd"],
        "origin": f"{origin['cidade']} - {origin['uf']}",
        "destination": (
            f"{destination['cidade']} - {destination['uf']}"
            if destination
            else "Não informado"
        ),
        "lastUpdate": last_event["dtHrCriado"]["date"]
    }

app.run(host="0.0.0.0", port=5000, debug=True)
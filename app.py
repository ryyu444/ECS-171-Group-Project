import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

# Create flask app
app = Flask(__name__)

# Load the pickle models
multi_logreg_model = pickle.load(open("models/multi_logreg.pkl", "rb"))
gnb_model = pickle.load(open("models/gnb.pkl", "rb"))
svm_model = pickle.load(open("models/svm.pkl", "rb"))

@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/predict", methods = ["POST"])
def predict():
    int_features = [int(x) for x in request.form.values()]
    features = [np.array(int_features)]
    log_reg_prediction = multi_logreg_model.predict(features)
    gnb_prediction = gnb_model.predict(features)
    svm_prediction = svm_model.predict(features)    

    return render_template("index.html", logreg_prediction_text = "The stress level is {}".format(log_reg_prediction[0]), 
                                        gnb_prediction_text = "The stress level is {}".format(gnb_prediction[0]), 
                                        svm_prediction_text = "The stress level is {}".format(svm_prediction[0]))

if __name__ == "__main__":
    app.run(debug=True)
from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import warnings
import pickle

app = Flask(__name__)
CORS(app)
warnings.filterwarnings('ignore')

lr = pickle.load(open('linear_regression_model.pkl', 'rb'))
multi_logreg = pickle.load(open('multinomial_logistic_regression_model.pkl', 'rb'))
gnb = pickle.load(open('naive_bayes_model.pkl', 'rb'))
svm = pickle.load(open('support_vector_machine_model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def getPredictions():
    # get user input & format to model input
    req = request.json
    sleepQuality, sleepDuration = req['sleepQuality'], req['sleepDuration']
    features = np.array([sleepQuality, sleepDuration]).reshape(1, -1).astype(int)
    # print(features)

    # make predictions w/ user input
    lr_pred = lr.predict(features)
    multi_logreg_pred = multi_logreg.predict(features)
    gnb_pred = gnb.predict(features)
    svm_pred = svm.predict(features)

    # format predictions to JSON
    prediction = [
        {'Linear Regression': str(np.round(lr_pred[0]))},
        {'Multinomial Logistic Regression': str(np.round(multi_logreg_pred[0]))},
        {'Naive Bayes Classifier': str(np.round(gnb_pred[0]))},
        {'Linear Support Vector Machine': str(np.round(svm_pred[0]))}
    ]
    
    # return data to frontend
    return jsonify({'data': prediction})

if __name__ == '__main__':
    app.run(debug=True, port=8080)
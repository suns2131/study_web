from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.cnyi5.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta


@app.route('/')
def home():
    return render_template('index.html')

@app.route("/bucket", methods=["POST"])
def bucket_post():
    bucket_receive = request.form['bucket_give']
    all_bucket = list(db.bucket.find({}, {'_id': False}))
    count = len(all_bucket) + 1
    doc ={
        'num': count,
        'bukeck' : bucket_receive,
        'done' : 0
    }

    db.bucket.insert_one(doc)


    return jsonify({'msg': '등록 완료!'})

@app.route("/bucket/done", methods=["POST"])
def bucket_done():
    num_receive = request.form['num_give']
    done_receive = request.form['done_give']
    print(num_receive,done_receive)
    db.bucket.update_one({'num': int(num_receive)}, {'$set': {'done': done_receive}})

    return jsonify({'msg': '버킷 완료!'})

@app.route("/bucket", methods=["GET"])
def bucket_get():
    all_bucket = list(db.bucket.find({}, {'_id': False}))
    return jsonify({'bucketlist': all_bucket})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
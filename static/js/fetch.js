export default {
    post: function (baseUri, uri, data, success) {
        fetch(baseUri + uri, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.info(response)
            response.json()
                .then(data => success(data))
                .catch(error => console.log("煮熟的鸟飞了", error))
        })
            .catch(error => console.log("刚开始就出错了,,,,", error));

    },
    get() {
        alert("get")
    }
}
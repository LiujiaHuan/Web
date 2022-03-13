const url = "www.ayuki13.top";
const img1 = getElementByid('img1');
const img2 = getElementByid('img2');
const img3 = getElementByid('img3');
const img4 = getElementByid('img4');

/**
	Promise 使用小demo
*/
function promise(img){
	return new Promise((resolve, reject) =>{
		const request = new XMLHttpRequest();
		request.open('GET',url);
		request.responseType = 'blob';
		request.onload = function(){
			if(request.status === 200){
				img.src = url;
				return resolve(request.response);	//调用成功并返回
			}else{
				console.log("failed ");
				return reject(Error('failed'));		//调用失败	Error异常对象
			}
		}
		request.onerror = function(){
			console.log("failed");
			return reject(Error("Newwork Error"));	//调用失败	Error异常对象
		}
		request.send();
	});
}

promise(img1).then((request) => {
	console.log(request.response);
	return promise(img2);			//再调用一次promise，promise返回resolve，then得到resolve再返回，继而可以再接一个then。
}).then((request) => {
	console.log(request.response);
	return promise(img3);
}).then((request) => {
	console.log(request.response);
	return promise(img4);
}).catch((err) => {
	console.log(err);
})

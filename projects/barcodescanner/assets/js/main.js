(function(){
	console.log('%c ⚡ FLASH ', 'background: #800000; color: yellow; font-size: 12pt; font-family: "Comic Sans MS", cursive, sans-serif', 'run robin run');		

	Quagga.init({
		inputStream : {
		  name : "Live",
		  type : "LiveStream",
		  target: document.querySelector('#view')
		},
		decoder : {
		  readers : ["code_128_reader"]
		}
	  }, function(err) {
			if (err) {
				alert('QUAGGA ERROR');
				console.log(err);
				return
			}
			alert('QUAGGA WORKING')
			console.log("Initialization finished. Ready to start");
			Quagga.start();
	  });
})();
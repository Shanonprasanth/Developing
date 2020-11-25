			var start = new Date().getTime();
			function getrandomcolor()
			{
				var letters = '0123456789ABCDEF'.split('');
				var color = '#';
				for(var i = 0; i < 6; i++)
				{
					color += letters[Math.floor(Math.random() * 16)];
				}
				return color;
			}
			function makeShapeAppear()
			{
				var top = Math.random() * 400;
				var left = Math.random() * 400;
				var width = Math.random() * 400;
				var height = Math.random() * 400;
				if(Math.random() > 0.5)
				{
					document.getElementById("shape").style.borderRadius = "50%";
				}
				else
				{
					document.getElementById("shape").style.borderRadius = "0";
				}
				document.getElementById("shape").style.backgroundColor  = getrandomcolor();
				document.getElementById("shape").style.marginTop = top + "px";
				document.getElementById("shape").style.marginLeft = left + "px";
				document.getElementById("shape").style.width = width + "px";
				document.getElementById("shape").style.height = height + "px";
				document.getElementById("shape").style.display = "block";
				start = new Date().getTime();
			}
			function shapetimeup()
			{
				setTimeout(makeShapeAppear, Math.random() * 2000);
			}
			shapetimeup();
			document.getElementById("shape").onclick = function()
			{
				document.getElementById("shape").style.display = "none";
				var end = new Date().getTime();
				var timeTaken = (end - start) / 1000;
				document.getElementById("timeTaken").innerHTML = timeTaken + "s";
				shapetimeup();
			}
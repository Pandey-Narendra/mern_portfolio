const navBlog = document.getElementById("nav-blog");

		for(const link of navBlog.getElementsByTagName("a")) {  
		link.onmousemove = e => {
			const rect = link.getBoundingClientRect(),    
				img = link.querySelector("img");
			
			img.style.left = `${e.clientX - rect.left}px`;
			img.style.top = `${e.clientY - rect.top}px`;
		}
		}

		window.onmousemove = e => {
			const percent = e.clientY / window.innerHeight;
			
			navBlog.animate({
				transform: `translateY(${percent * navBlog.offsetHeight * -1}px)`
			}, {
				fill: "forwards",
				duration: 4000
			})
			}
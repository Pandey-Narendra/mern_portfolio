const cards = document.querySelectorAll('.project-card');
		
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
				} else {
				entry.target.classList.remove('in-view');
				}
			});
		}, { threshold: 0.1 });

		cards.forEach(card => observer.observe(card));

		// Mousemove reveal effect
		const projectSection = document.getElementById('projects-section');
		projectSection.addEventListener('mousemove', (e) => {
		const rect = projectSection.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		projectSection.querySelectorAll('.project-content').
			forEach(content => {
				content.style.setProperty('--x', `${x}%`);
				content.style.setProperty('--y', `${y}%`);
				content.classList.add('hovered');
			});
		});

		projectSection.addEventListener('mouseleave', () => {
			projectSection.querySelectorAll('.project-content').forEach(content => {
				content.classList.remove('hovered');
			});
		});

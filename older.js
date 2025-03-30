const skills = ["Web Design", "UI/UX Development", "Creative Branding", "Frontend Development", "Tech Innovation"];
        let index = 0;
        function changeText() {
            document.getElementById("changing-text").textContent = skills[index];
            index = (index + 1) % skills.length;
        }
        setInterval(changeText, 2000);
        changeText();

        const images = document.querySelectorAll(".images img");
        let imgIndex = 0;
        function showNextImage() {
            images.forEach(img => img.style.opacity = 0.1);
            images[imgIndex].style.opacity = 1;
            imgIndex = (imgIndex + 1) % images.length;
        }
        setInterval(showNextImage, 3000);
        showNextImage();




        // js for services page


        const services = [
            { title: "Web Design", description: "Creating visually appealing and user-friendly websites with modern aesthetics." },
            { title: "UI/UX Development", description: "Designing intuitive user experiences to enhance digital interactions." },
            { title: "Creative Branding", description: "Building strong, recognizable brands through compelling visuals and identity." },
            { title: "Tech Innovation", description: "Exploring cutting-edge technologies to drive digital transformation." },
            { title: "SEO & Marketing", description: "Boosting online presence with strategic marketing and SEO solutions." },
            { title: "E-Commerce Solutions", description: "Developing scalable and efficient online stores to maximize sales." },
            { title: "App Development", description: "Crafting high-performance mobile applications for seamless experiences." },
            { title: "Cloud Computing", description: "Leveraging cloud technologies for secure and scalable solutions." }
        ];
        let index1 = 0;
        function updateServices() {
            for (let i = 0; i < 6; i++) {
                document.getElementById(`service${i+1}`).innerHTML = `<h2>${services[(index1 + i) % services.length].title}</h2><p>${services[(index + i) % services.length].description}</p>`;
            }
            index = (index + 1) % services.length;
        }
        setInterval(updateServices, 5000);
        updateServices();




        // script for about me


        const images1 = document.querySelectorAll(".images1 img");
        let imgIndex1 = 0;
        function showNextImage1() {
            images1.forEach(img => img.style.opacity = 0.1);
            images1[imgIndex1].style.opacity = 1;
            imgIndex1 = (imgIndex1 + 1) % images1.length;
        }
        setInterval(showNextImage1, 3000);
        showNextImage1();





        // navigating slowly

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: "smooth"
                    });
                }
            });
        });




        // back to top function


        window.addEventListener("scroll", function () {
            let backToTopButton = document.getElementById("backToTop");
            let homepageHeight = document.getElementById("home").offsetHeight;
        
            if (window.scrollY > homepageHeight) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });
        
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        




        // styling the nav bar mobile responsivenes


        function toggleMenu() {
            var menu = document.querySelector(".nav-links");
            var icon = document.querySelector(".menu-icon");

            menu.classList.toggle("active");

            // Toggle between ☰ and ❌
            icon.innerHTML = menu.classList.contains("active") ? "❌" : "☰";
        }

        const cat = document.getElementById("cat");
        const container = document.querySelector(".container");
        console.log(cat);
        console.log(container);
        
        for(let i = 1; i <= 2; i++){
            console.log('iteration',i);
            const copy = cat.cloneNode(true);
            container.appendChild(copy);
        }

         // Colors for each cat
         const color = ["brown", "black", "lightgreen"];
    const colors = ["peachpuff", "lightblue", "lightgreen"];

    // Get all circles and assign colors
    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle, index) => {
        circle.querySelector(".dash-circle").style.backgroundColor = colors[index];
        circle.querySelector(".dot-circle").style.backgroundColor = color[index];
    });

        console.log(document.querySelectorAll(".circle").length);
    

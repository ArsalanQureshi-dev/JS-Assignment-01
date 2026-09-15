 // 1. Use getElementById() to change the <h1> text
        const heading = document.getElementById("heading1");
        heading.textContent = "My Student Profile";
        // console.log("Heading changed to:", heading.textContent);

        // 2. Use getElementsByClassName() to change the student's name color to blue
        const studentNames = document.getElementsByClassName("student-name");
        if (studentNames.length > 0) {
            studentNames[0].style.color = "blue";
        }

        // 3. Use querySelectorAll() to change both .message paragraphs to green
        const messages = document.querySelectorAll(".message");
        messages.forEach(msg => {
            msg.style.color = "green";
        });

        // 4. Change the body background color to lightgray using document.body
        document.body.style.backgroundColor = "lightgray";

        // 5. When the button is clicked, change the body background color to lightblue
        const button = document.getElementById("colorBtn");
        button.addEventListener("click", function() {
            document.body.style.backgroundColor = "lightblue";
        });

        // 6. Use getAttribute() to get the link's href and print it in the console
        const link = document.getElementById("myLink");
        console.log("Link href:", link.getAttribute("href"));

        // 7. Use setAttribute() to make the link open in a new tab
        link.setAttribute("target", "_blank");

        // 8. Use classList.add() to add 'active' to the #box
        const box = document.getElementById("box");
        box.classList.add("active");

        // 9. Use classList.contains() to check whether the box has the active class and print the result
        const hasActive = box.classList.contains("active");
        console.log("Does the box have 'active' class?", hasActive);

        // 10. Use parentElement to print the box's parent in the console
        console.log("Box's parent element:", box.parentElement);
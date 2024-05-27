document.addEventListener("DOMContentLoaded", function() {
    const packages = document.querySelectorAll(".package");

    packages.forEach(package => {
        const minusButton = package.querySelector(".minus");
        const plusButton = package.querySelector(".plus");
        const signUpButton = package.querySelector(".sign-up");
        const roomCountElement = package.querySelector(".room-count");
        const priceElement = package.querySelector(".price");
        const thankYouMessageElement = package.querySelector(".thank-you-message");
        let roomCount = parseInt(roomCountElement.textContent);
        let price = parseInt(priceElement.textContent.replace("$", ""));

        minusButton.addEventListener("click", function() {
            if (roomCount > 1) {
                roomCount--;
                updateRoomCount();
                console.log("work",minusButton)
            }
        });

        plusButton.addEventListener("click", function() {
            roomCount++;
            updateRoomCount();
            console.log("work",plusButton)
        });

        signUpButton.addEventListener("click", function() {
            thankYouMessageElement.textContent = `Thank you for choosing ${roomCount} room(s);`
            thankYouMessageElement.style.display = "block";
        });

        function updateRoomCount() {
            roomCountElement.textContent = roomCount;
            priceElement.textContent = `${price * roomCount}`;
        }
    });
});
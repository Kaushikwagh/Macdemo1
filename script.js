document.addEventListener("DOMContentLoaded", function () {
    const dragon = document.getElementById("dragon");
    const attackButton = document.getElementById("attack");
    const message = document.getElementById("message");

    let dragonHealth = 100;

    attackButton.addEventListener("click", () => {
        const damage = Math.floor(Math.random() * 10) + 1;
        dragonHealth -= damage;

        if (dragonHealth > 0) {
            message.textContent = `You attacked the dragon for ${damage} damage. Dragon's health: ${dragonHealth}`;
        } else {
            message.textContent = "Congratulations! You defeated the dragon!";
            dragon.style.display = "none";
            attackButton.style.display = "none";
        }
    });
});

// Setting maximum movement range (to keep within the eye bounds)
const maxDistance = 30;

// Handling mouse movement
const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    // Normalize cursor position to [-1, 1]
    const fractionX = ((clientX / innerWidth) * 2 - 1) * maxDistance;
    const fractionY = ((clientY / innerHeight) * 2 - 1) * maxDistance;

    // Update eyeballs
    document.querySelectorAll('.eyeball').forEach(eyeball => {
        eyeball.style.transform = `translate(${fractionX}px, ${fractionY}px)`;
    });
};

// Add hover animation for blinking
const handleMouseLeave = () => {
    document.querySelectorAll('.eyeball').forEach((eyeball) => {
        eyeball.style.transform = `translate(0, 0)`;
    });
};

// Attach event listeners
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseleave', handleMouseLeave);


'use client';

export default function PageLogo() {
    const handleLogoClick = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleLogoClick} className='font-caveat font-semibold text-3xl lg:text-4xl text-saffron-dark transition-colors duration-200 hover:text-saffron-hover-dark'>
            Harshavardhan Kona
        </button>
    );
}

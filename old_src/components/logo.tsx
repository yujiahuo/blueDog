import logoImg from '../images/blueDogLogo-white.png';

export default function Logo() {
	return (
		<a href="/" className="logo">
			<img className="logoImg" src={logoImg} />
		</a>
	);
}
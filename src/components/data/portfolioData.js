/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortfoliofolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortfoliofolioDataortfolioData[]}
 */
export const portfolioData = [
	{
		imgSrc: '/img/tucont-minimal.png',
		title: 'Lading Page',
		skills: ['React', 'JavaScript', 'Tailwind'],
		descripcion:
			'Evolua seu negócio, ganhe velocidade e tração, com a integração de IA com a Contabilidade, dos Processos com a Tecnologia e da Experiência com o Empreendedorismo.',
		demoURL: 'https://tucont-minimal.vercel.app',
		anim: 'fade-right',
		 target: '_blank' ,
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/tucont-page.png',
		title: 'Lading Page',
		skills: ['React', 'JavaScript'],
		descripcion:
			'Nossa revolução: Muito mais que somente atender ao Governo, somos um copiloto estratégico, que automatiza a burocracia e impulsiona seu crescimento!',
		demoURL: 'https://tucont-9isnaldos-projects.vercel.app/',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/avenidas.png',
		title: 'Lading Page',
		skills: ['React', 'CSS'],
		descripcion:
			'Junte-se a centenas de empresas visionárias que já transformaram sua gestão contábil em uma poderosa alavanca de crescimento e inovação.',
		demoURL: 'https://tucont-minimal.vercel.app',
		anim: 'fade-right',
		 target: '_blank' ,
		averageBrightness: 0.1,
	},
		{
		imgSrc: '/img/care.png',
		title: 'SaaS',
		skills: ['React', 'CSS'],
		descripcion:
			'A plataforma de gestão que vai otimizar os processos e funcionamento do seu consultório com estratégia, tecnologia e resultados!',
		demoURL: 'https://iupcare.com.br/portal/principal',
		anim: 'fade-right',
		 target: '_blank' ,
		averageBrightness: 0.1,
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Typescript: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portfolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortfolioData = portfolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});

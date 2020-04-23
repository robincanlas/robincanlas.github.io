import * as React from 'react';
import * as style from './style.css';
import { Container, Segment, Header, Message } from 'semantic-ui-react';
import { skills } from 'app/constants';
import { CreateJS, CSS, HTML5, Javascript, ReactJS, Redux, Typescript } from 'app/components';

export namespace AboutPage {
	export interface Props {
	}
	
	export interface Icon { [key: string]: JSX.Element; }
}

export const svgIcons: AboutPage.Icon  = {
	'createjs': <CreateJS />,
	'css': <CSS />,
	'html5': <HTML5 />,
	'javascript': <Javascript />,
	'reactjs': <ReactJS />,
	'redux': <Redux />,
	'typescript': <Typescript />
};

export const AboutPage: React.FC<AboutPage.Props> = (props: AboutPage.Props) => {
	return (
		<Container id={style.container}>
				<Message className={style.message}>
					<span><Header as='h2'>Hi,</Header></span>
					<p>
						I'm Kristoffer Robin Canlas, a developer based in Quezon City, Philippines. I have almost 6 years of experience as a JavaScript Developer. My passion is coding and learning new technologies.
					</p>
				</Message>
			<Segment className={style.segment}>
				<Header as='h1'>Skills</Header>
				<span>
					{skills.map((skill) => (
						<span key={skill.name}>
							{svgIcons[skill.name]}
						</span>
						// <Image key={skill.title} title={skill.title} src={''} />
					))}
				</span>
			</Segment>
		</Container>
	);
};

import * as React from 'react';
import * as style from './style.css';
import { Container, Segment, Image, Header, Message } from 'semantic-ui-react';
import { skills, assetsPath } from 'app/contants';
import '../../../assets/css.svg';

export namespace AboutPage {
	export interface Props {
	}
}

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
							<Image key={skill.title} title={skill.title} src={`${assetsPath}/${skill.image}`} />
						))}
				</span>
			</Segment>
		</Container>
	);
};

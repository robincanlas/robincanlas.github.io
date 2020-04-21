import * as React from 'react';
import * as style from './style.css';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';

export namespace PhotoPage {
	export interface Props {
	}
}

export const PhotoPage: React.FC<PhotoPage.Props> = (props: PhotoPage.Props) => {
	return (
		<Container id={style.container}>
			<Grid>
				{[1, 2, 3, 4, 5, 6].map(element => (
					<Grid.Column key={element} mobile={16} tablet={8} computer={4}>
						<Segment>
							<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
						</Segment>
					</Grid.Column>
				))}
			</Grid>
		</Container>
	);
};

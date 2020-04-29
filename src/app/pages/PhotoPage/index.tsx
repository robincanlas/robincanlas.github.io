import * as React from 'react';
import * as style from './style.css';
import { Container, Dimmer, Loader, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import * as PhotoActions from 'app/store/photography/actions';
import { PhotoState } from 'app/store/photography/state';
import { RootState } from 'app/store';

export namespace Photo {
	export interface Props {
		photography: PhotoState;
		photoActions: any;
	}
}

const PhotoPage: React.FC<Photo.Props> = (props: Photo.Props) => {
	useEffect(() => {
		props.photoActions.getPhotos();
		return () => {
			// will unmount
		};
	}, []); // put empty [] to prevent re-rendering on update

	return (
		<Container id={style.container}>
			<Dimmer active={props.photography.isLoading}>
				<Loader />
			</Dimmer>
			<span className={style['gallery-list']}>
				{props.photography.photos.map(element => (
					<span key={element.id}>
						<Image src={element.src} />
					</span>
				))}
			</span>
		</Container>
	);
};

const Photo = connect(
	(state: RootState, ownProps) => {
		return {
			photography: state.photography
		};
	},
	(dispatch: any) => ({
		photoActions: bindActionCreators(PhotoActions, dispatch) 
	})
)(PhotoPage);

export { Photo as PhotoPage };
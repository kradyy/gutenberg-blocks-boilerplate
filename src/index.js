import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import metadata from './block.json';

registerBlockType(metadata.name, {
	edit: () => {
		const blockProps = useBlockProps();

		return (
			<p {...blockProps}>
				{__('Boilerplate - hello from the editor!', 'boilerplate')}
			</p>
		);
	},
	save: () => {
		const blockProps = useBlockProps.save();

		return (
			<p {...blockProps}>
				{__('Boilerplate - hello from the editor!', 'boilerplate')}
			</p>
		);
	},
});

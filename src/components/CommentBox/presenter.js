import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import Textarea from 'react-textarea-autosize';

const CommentBox = (props, context) => (
  <form action="">
    <Textarea placeholder={context.t('의견을 적어주세요')}/>
  </form>
);

CommentBox.contextTypes = {
  t: PropTypes.func.isRequired
}


export default CommentBox;
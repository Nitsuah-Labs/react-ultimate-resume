import React, { useCallback, useState } from 'react';

import { createUseStyles } from 'react-jss';

import { Button, TextField } from '@wld/ui';

import { Dialog, DialogContent, DialogActions } from '@material-ui/core';

import { DialogTitle } from '../dialog/dialog_title/dialog_title';

import { styles } from './url_input_dialog_styles';

const useStyles = createUseStyles(styles);

const UrlInputDialogComponent = ({ open, onClose, onConfirm }) => {
    const classes = useStyles();
    const [url, setUrl] = useState('');

    const handleTextFieldChange = useCallback(event => setUrl(event.target.value), []);
    const onClick = useCallback(() => onConfirm(url), [url]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            classes={{
                paper: classes.paper
            }}
        >
            <DialogTitle>Entrer une URL</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    placeholder="https://pictures.com/0.jpg"
                    variant="flat"
                    onChange={handleTextFieldChange}
                    value={url}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} size="small">
                    Close
                </Button>
                <Button color="primary" size="small" onClick={onClick}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export const UrlInputDialog = UrlInputDialogComponent;

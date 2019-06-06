import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiFetch from './api-fetch';

/**
 * Ajax form
 * 
 * @example
 *  <AjaxForm
 *    action="/create"
 *    method="POST"
 *  />
 */
class AjaxForm extends Component {
    constructor() {
        super();
        this.form = null;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({
            success: false,
            fail: false,
            response: null
        });
    }

    get formData() {
        let data = {};

        if (typeof this.props.additionalData === 'function') {
            data = this.props.additionalData();
        }
        else if (
            typeof this.props.additionalData === 'object' &&
            this.props.additionalData !== null
        ) {
            data = { ...this.props.additionalData };
        }

        if (this.form) {
            [...this.form.querySelectorAll('[name]')].forEach(field => {
                if (field.getAttribute('type') === 'checkbox') {
                    data[field.getAttribute('name')] = !!field.checked;
                }
                else {
                    data[field.getAttribute('name')] = field.value;
                }
            });
        }

        return data;
    }

    async handleSubmit(eventData) {
        eventData.preventDefault();
        this.form = eventData.target;

        if (typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(eventData);
        }

        if (this.props.disabled) {
            return false;
        }

        const { formData } = this;

        try {
            const methodName = (this.props.method || 'GET').toLowerCase();
            const method = ApiFetch[methodName];

            if (typeof method !== 'function') {
                throw new Error('AjaxForm: method '+  methodName + ' not supported');
            }

            const response = await method(this.props.action, formData);

            const props = { request: formData, response };
            const successState = (
                typeof this.props.onSuccess === 'function' &&
                this.props.onSuccess(props)
            );

            this.setState({ success: successState });
        }
        catch (ex) {
            const props = { request: formData, response: ex };
            const failState = (
                typeof this.props.onFail === 'function' &&
                this.props.onFail(props)
            );
            this.setState({ fail: failState });
        }
    }

    render() {
        if (this.state.success) {
            return this.state.success;
        }

        return (
            <React.Fragment>
                {this.state.fail || null}
                <form
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.handleSubmit}
                    className={this.props.className}
                    style={this.props.style}
                >
                    {this.props.children}
                </form>
            </React.Fragment>
        )
    }
}

AjaxForm.propTypes = {
    action: PropTypes.string,
    method: PropTypes.string,
    additionalData: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func,
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    onSubmit: PropTypes.func,
    onSuccess: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
    ]),
    onFail: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
    ])
};
AjaxForm.defaultProps = {
    action: '/',
    method: 'GET'
};

export default AjaxForm;

import * as React from 'react';
import { Children } from 'react';
import { object, element } from 'prop-types';

export interface PhraseAppProviderProps { config: Object; }

export default class PhraseAppProvider extends React.Component<PhraseAppProviderProps, {}> {
  phraseappConfig: any;
  public static childContextTypes: any;
  public static propTypes: any;

  constructor(props: PhraseAppProviderProps, context: any) {
    super(props, context);
    this.phraseappConfig = props.config;
  }

  getChildContext() {
    return { phraseappConfig: this.phraseappConfig };
  }

  componentWillReceiveProps(nextProps: PhraseAppProviderProps) {
    if (this.props.config !== nextProps.config) {
      throw new Error('[react-i18next-phraseapp][PhraseAppProvider] does not support changing the phraseapp config object');
    }
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

PhraseAppProvider.propTypes = {
  config: object.isRequired,
  children: element.isRequired
}

PhraseAppProvider.childContextTypes = {
  phraseappConfig: object.isRequired
}


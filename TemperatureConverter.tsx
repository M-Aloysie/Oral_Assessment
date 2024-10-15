import React, { Component } from 'react';

interface State {
    fahrenheit: string;
    celsius: string;
}

class TemperatureConverter extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fahrenheit: '',
            celsius: '',
        };
    }

    handleFahrenheitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fahrenheit = event.target.value;
        this.setState({ fahrenheit, celsius: this.convertFahrenheitToCelsius(fahrenheit) });
    };

    handleCelsiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const celsius = event.target.value;
        this.setState({ celsius, fahrenheit: this.convertCelsiusToFahrenheit(celsius) });
    };

    convertFahrenheitToCelsius(fahrenheit: string): string {
        const f = parseFloat(fahrenheit);
        if (isNaN(f)) return '';
        const c = (f - 32) * (5 / 9);
        return c.toFixed(2);
    }

    convertCelsiusToFahrenheit(celsius: string): string {
        const c = parseFloat(celsius);
        if (isNaN(c)) return '';
        const f = c * (9 / 5) + 32;
        return f.toFixed(2);
    }

    render() {
        return (
            <div>
                <h2>Temperature Converter</h2>
                <div>
                    <label>
                        Fahrenheit:
                        <input
                            type="text"
                            value={this.state.fahrenheit}
                            onChange={this.handleFahrenheitChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Celsius:
                        <input
                            type="text"
                            value={this.state.celsius}
                            onChange={this.handleCelsiusChange}
                        />
                    </label>
                </div>
            </div>
        );
    }
}

export default TemperatureConverter;

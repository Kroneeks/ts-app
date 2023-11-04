import { Preview } from "@storybook/react";
import "../../src/app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from '../../src/shared/config/i18n/i18nForTests'
import { StateSchema, StoreProvider, createReduxStore } from '../../src/app/providers/StoreProvider'
import { ThemeProvider } from '../../src/app/providers/ThemeProvider'


const preview: Preview = {
  decorators: [
    (Story) => (
        <BrowserRouter>
            <ThemeProvider>
              <I18nextProvider i18n={i18nForTests}>
                <Suspense fallback="">
                  <StoreProvider>
                    <Story />
                  </StoreProvider>
                </Suspense>
              </I18nextProvider>
            </ThemeProvider>
        </BrowserRouter>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default {
  preview
};

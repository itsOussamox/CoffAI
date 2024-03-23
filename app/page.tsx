'use client';
import MainPage from "./components/MainPage";
import { store } from "./states/store";
import { Provider } from "react-redux";
export default function Home() {
  
  return (
      <Provider store={store}>
        <MainPage />
      </Provider>
  );
}

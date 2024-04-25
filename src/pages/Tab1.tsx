import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  console.log("TAB 1 RENDERING");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>tab 1</IonContent>
    </IonPage>
  );
};

export default Tab1;

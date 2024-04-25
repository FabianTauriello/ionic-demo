import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  console.log("TAB 3 RENDERING");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>tab 3</IonContent>
    </IonPage>
  );
};

export default Tab3;

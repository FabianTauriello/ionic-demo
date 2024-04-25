import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  console.log("TAB 2 RENDERING");

  const nav = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonButton onClick={() => nav.push("/tabs/tab2/detail")}>go to detail</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";

function TabDetail() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>content detail</IonContent>
    </IonPage>
  );
}

export default TabDetail;

import React, { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import { View, Text } from "react-native";

import { useAuth } from "../../hooks/auth";

import { Button } from "../Button";
import { ModalView } from "../ModalView";

import { styles } from "./styles";

export interface ConfirmSignOutModalHandles {
  open(): void;
  close(): void;
}

const ConfirmSignOutModalComponent: React.ForwardRefRenderFunction<ConfirmSignOutModalHandles> =
  (_, ref) => {
    const { signOut } = useAuth();

    const [isModalVisible, setIsModalVisible] = useState(false);

    function open(): void {
      setIsModalVisible(true);
    }

    function close(): void {
      setIsModalVisible(false);
    }

    async function handleConfirm(): Promise<void> {
      await signOut();
    }

    useImperativeHandle(
      ref,
      () => ({
        open,
        close,
      }),
      []
    );

    return (
      <ModalView onClose={close} visible={isModalVisible} contentHeight={200}>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Deseja sair do </Text>
            <Text style={[styles.title, styles.titleBold]}>Game</Text>
            <Text style={[styles.title, styles.titlePrimary]}>Play</Text>
            <Text style={[styles.title, styles.titleBold]}>?</Text>
          </View>

          <View style={styles.footer}>
            <Button
              title="Não"
              type="outlined"
              style={{ width: "48%" }}
              onPress={close}
            />

            <Button
              title="Sim"
              onPress={handleConfirm}
              style={{ width: "48%" }}
            />
          </View>
        </View>
      </ModalView>
    );
  };

export const ConfirmSignOutModal = forwardRef(ConfirmSignOutModalComponent);

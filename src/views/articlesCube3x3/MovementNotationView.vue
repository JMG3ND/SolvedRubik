<template>
    <section>
        <CardArticle title="Notación de movimientos">
            <p>La notación de movimientos del Cubo de Rubik 3x3 se basa en el uso de letras
                para representar los movimientos de
                cada una de las seis caras del cubo. Las letras utilizadas son:</p>
            <ul>
                <li> F: Front (frente)</li>
                <li>B: Back (espalda)</li>
                <li>L: Left (izquierda)</li>
                <li>R: Right (derecha)</li>
                <li>U: Up (arriba)</li>
                <li>D: Down (abajo)</li>
            </ul>
            <p>Además, se pueden agregar algunas marcas para indicar la dirección y el
                sentido del movimiento. Las marcas
                utilizadas son:</p>

            <ul>
                <li>(ninguna marca): un giro de 90 grados en el sentido de las agujas del reloj.</li>
                <li>': un giro de 90 grados en el sentido contrario a las agujas del reloj.</li>
                <li>2: un giro de 180 grados (media vuelta).</li>
            </ul>
            <p>Con estas letras y marcas, se pueden representar todos los movimientos del
                Cubo de Rubik 3x3. Algunos
                ejemplos de
                notación de movimientos son:</p>
            <ul>
                <li>F: un giro de 90 grados en el sentido de las agujas del reloj de la cara frontal.</li>
                <li>F': un giro de 90 grados en el sentido contrario a las agujas del reloj de la cara frontal.</li>
                <li>F2: un giro de 180 grados de la cara frontal.</li>
                <li>R U R' U': una secuencia de movimientos que gira la esquina frontal derecha superior en el sentido de
                    las
                    agujas del reloj.</li>
            </ul>
            <p>Es importante tener en cuenta que en la notación de movimientos del Cubo de
                Rubik 3x3, la cara frontal es la
                que
                está frente a ti cuando sostienes el cubo con la cara superior hacia arriba. La cara izquierda está a tu
                izquierda, la derecha a tu derecha, la cara superior está en la parte superior y la cara inferior está en la
                parte inferior.</p>
        </CardArticle>
    </section>
</template>

<script setup>
import CardArticle from '@/components/CardArticle.vue';
import { useTocSidebarStore } from '@/stores/tocSidebarStore';
import { onMounted } from 'vue';

//Reinicio los datos del tocSidebar
const { tocSidebarDataFill } = useTocSidebarStore();
onMounted(() => tocSidebarDataFill(null));
</script>
<template>
   <div>
      <h1>Banner</h1>
   </div>
   <GeneralCard>
      <template #title>
         На головній верх
      </template>
      <template #label>
         <ToggleCheckbox :value="showingBlock" @inputValue="changeShowingBlock" />
      </template>
      <template #body>
         <div class="example">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iste? Doloribus nobis ipsam soluta tempore ex
            provident rerum molestias voluptatibus sint assumenda atque maiores iure ad nemo, esse amet nulla! Quos
            veritatis corrupti dolore laudantium iusto tenetur tempore adipisci ab, earum dolorem! Soluta, assumenda vel
            maxime eius nobis autem voluptate. Nisi voluptatem unde, dicta illo tempore aliquid maxime pariatur incidunt
            quae aliquam reprehenderit debitis error cum. Quos quas dicta pariatur, sed suscipit expedita labore beatae
            minima sint, porro possimus! Recusandae accusantium laborum at, dolore ab velit. Assumenda, nam excepturi
            cupiditate, esse officiis, quibusdam accusantium sequi magnam est nulla temporibus tempore at! Dolorum eius
            provident quasi aliquid nam et doloribus eligendi molestias ducimus cumque incidunt ut possimus totam dolor
            dolorem voluptatum non architecto in, reiciendis porro illo, similique numquam! Perspiciatis voluptates tenetur
            ullam animi sequi ducimus corrupti quam impedit. Nam eveniet facilis ducimus dolores eligendi illum ratione,
            eos, aut dicta aliquid reprehenderit nostrum voluptas non possimus cupiditate esse repellat molestias! Est sed
            repellendus tempora possimus eos! Nostrum deleniti minus quae temporibus exercitationem eveniet provident.
            Dolore fugiat beatae repudiandae quaerat libero distinctio! Maxime error aspernatur pariatur dolorem fugiat
            magni, tenetur placeat ex blanditiis quae sint vero repellendus repudiandae ut facere, nobis corporis aliquid
            cumque itaque earum doloribus iste. Eius assumenda dolorum voluptas deleniti, cumque et esse maxime accusamus
            sit optio porro voluptates possimus ab error similique culpa quidem veniam ducimus nesciunt minima voluptatem
            quae quis illum? Voluptate, quas? Dolorem, exercitationem aliquid quo maxime quis atque ab. Enim, ipsum animi.
            Pariatur repudiandae illum quos sed, aut qui distinctio animi ducimus molestias culpa consectetur hic mollitia
            iure neque numquam ab soluta odio aperiam laudantium dolorem nobis voluptatem autem? Cumque reiciendis eum
            culpa dolorum est, impedit voluptatum repellat illum nisi. Rerum voluptatibus deleniti exercitationem voluptate
            sed, commodi dolorum pariatur cum fugiat voluptatem voluptatum, natus cumque.
         </div>
      </template>
   </GeneralCard>
</template>

<script setup>
import { ref } from "vue";
import GeneralCard from '../components/GeneralCard.vue';
import ToggleCheckbox from '../components/ToggleCheckbox.vue';

const showingBlock = ref(true)

function changeShowingBlock(value) {
   showingBlock.value = value;
}
</script>

<style lang="scss" scoped></style>
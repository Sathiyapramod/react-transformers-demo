import React from "react";

// step 2
function Description({ name }) {
  return (
    <React.Fragment>
      <h2>{name}</h2>
      <p>
        Vestibulum vel porta justo, quis congue urna. In vel fringilla sapien.
        Suspendisse sed egestas mi, a fermentum metus. Fusce molestie, lacus in
        eleifend ultricies, sapien nibh malesuada nunc, ac elementum est felis
        eget purus. Suspendisse vulputate feugiat maximus. Morbi eu iaculis
        ipsum. Donec malesuada elementum dolor, eget dapibus nisl porttitor sit
        amet. Sed rutrum nibh vel ante luctus sollicitudin. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aenean vel tortor vel purus commodo bibendum. Proin eleifend orci eget
        magna tincidunt, at fermentum risus porta. Donec scelerisque cursus
        enim, facilisis pharetra nisi suscipit fringilla.
      </p>
    </React.Fragment>
  );
}

export default Description;

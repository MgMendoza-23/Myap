import React, { useState } from 'react';
import './Notificacion.css';
import { Link } from 'react-router-dom';

function Notificacion() {
  return (
<div class="d-flex align-items-start" _msthidden="8">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" _msthidden="4">
    <a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true" _msttexthash="43979" _msthidden="1" _msthash="1193">Home</a>
    <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" _msttexthash="94315" _msthidden="1" _msthash="1194">Profile</a>
    <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false" _msttexthash="113854" _msthidden="1" _msthash="1195">Messages</a>
    <a class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" _msttexthash="117221" _msthidden="1" _msthash="1196">Settings</a>
  </div>
  <div class="tab-content" id="v-pills-tabContent" _msthidden="4">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" _msttexthash="27470196" _msthidden="1" _msthash="1197">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aperiam accusantium facere minus totam, id cumque sequi ea harum necessitatibus animi inventore, sunt iste dicta libero consectetur ab eligendi repudiandae.</div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" _msttexthash="16554187" _msthidden="1" _msthash="1198">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus veniam optio porro impedit amet odio aliquam officia non nobis quisquam soluta repudiandae, earum nulla.</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" _msttexthash="35582781" _msthidden="1" _msthash="1199">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, dolores blanditiis labore praesentium sunt aperiam adipisci voluptatem minus tempore voluptatibus, aspernatur illum temporibus! Rem, quidem? Reiciendis ex explicabo perferendis nobis.</div>
    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" _msttexthash="22527297" _msthidden="1" _msthash="1200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur voluptates inventore adipisci quaerat asperiores ab blanditiis excepturi sunt, assumenda est ad voluptatum, iste provident?</div>
  </div>
</div>
  );
}

export default Notificacion;

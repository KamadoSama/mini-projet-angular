import { CanDeactivateFn } from '@angular/router';
import { ResidenceEditComponent } from '../../residence-edit/residence-edit.component';

export const residenceEditGuard: CanDeactivateFn<ResidenceEditComponent> = (component:ResidenceEditComponent) => {
  if(component.registerForm.dirty){
    const residenceName = component.registerForm.get('residenceName').value

    return confirm (`Voulez-vous annuler les changements effectués sur ${residenceName}`)
  }
  return true;
};
